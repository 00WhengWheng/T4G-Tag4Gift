import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Utility function to generate random data
const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// Helper function to create coin transaction and update balance
async function createCoinTransaction(
  userId: string, 
  type: 'TAG' | 'SHARE' | 'GAME', 
  amount: number, 
  source: 'TAG_SCAN' | 'SOCIAL_SHARE' | 'GAME_COMPLETION' | 'GAME_PLAY', 
  sourceId: string, 
  description: string
) {
  // Create the transaction
  await prisma.coinTransaction.create({
    data: {
      userId,
      type,
      amount,
      source,
      sourceId,
      description,
      metadata: {
        timestamp: new Date().toISOString(),
        platform: type === 'SHARE' ? 'social' : type === 'TAG' ? 'venue' : 'game'
      }
    }
  })

  // Update the user's coin balance
  const currentBalance = await prisma.coinBalance.findUnique({
    where: { userId }
  })

  if (currentBalance) {
    const updateData: any = {
      totalCoins: {
        increment: amount
      }
    }

    // Update specific coin type
    if (type === 'TAG') {
      updateData.tagCoins = { increment: amount }
    } else if (type === 'SHARE') {
      updateData.shareCoins = { increment: amount }
    } else if (type === 'GAME') {
      updateData.gameCoins = { increment: amount }
    }

    await prisma.coinBalance.update({
      where: { userId },
      data: updateData
    })
  }
}

// Utility function to check and skip duplicates
async function checkExistingTenants(tenantNames: string[]) {
  const existing = await prisma.tenant.findMany({
    where: {
      name: {
        in: tenantNames
      }
    }
  })
  return existing
}

async function checkExistingVenues(venueNames: string[]) {
  const existing = await prisma.venue.findMany({
    where: {
      name: {
        in: venueNames
      }
    }
  })
  return existing
}

async function checkExistingChallenges(challengeNames: string[]) {
  const existing = await prisma.challenge.findMany({
    where: {
      name: {
        in: challengeNames
      }
    }
  })
  return existing
}

async function checkExistingUsers(userEmails: string[]) {
  const existing = await prisma.user.findMany({
    where: {
      email: {
        in: userEmails
      }
    }
  })
  return existing
}

async function checkExistingShares(userIds: string[]) {
  const existing = await prisma.share.findMany({
    where: {
      userId: {
        in: userIds
      }
    }
  })
  return existing
}

async function checkExistingScans(userIds: string[]) {
  const existing = await prisma.tagScan.findMany({
    where: {
      userId: {
        in: userIds
      }
    }
  })
  return existing
}

// Task 1: Create 5 tenants
async function seedTenants() {
  console.log('🏢 Seeding tenants...')
  
  const tenants = [
    {
      name: 'Caffè Centrale',
      email: 'info@caffecentrale.it',
      description: 'Traditional Italian coffee house in the heart of Rome, serving authentic espresso and pastries since 1985.',
      type: 'VENUE' as const,
      status: 'ACTIVE' as const,
      maxActiveChallenges: 15,
      maxUsersPerChallenge: 150,
      maxTags: 25
    },
    {
      name: 'The Burger Lab',
      email: 'hello@burgerlab.com',
      description: 'Innovative burger restaurant experimenting with unique flavors and sustainable ingredients.',
      type: 'BUSINESS' as const,
      status: 'ACTIVE' as const,
      maxActiveChallenges: 20,
      maxUsersPerChallenge: 200,
      maxTags: 30
    },
    {
      name: 'Verde Pizza Napoletana',
      email: 'contact@verdepizza.it',
      description: 'Authentic Neapolitan pizzeria using traditional wood-fired ovens and fresh local ingredients.',
      type: 'VENUE' as const,
      status: 'ACTIVE' as const,
      maxActiveChallenges: 12,
      maxUsersPerChallenge: 120,
      maxTags: 20
    },
    {
      name: 'Urban Drinks & Cocktails',
      email: 'info@urbandrinks.bar',
      description: 'Modern cocktail bar offering creative mixology experiences and premium spirits.',
      type: 'BUSINESS' as const,
      status: 'ACTIVE' as const,
      maxActiveChallenges: 18,
      maxUsersPerChallenge: 180,
      maxTags: 35
    },
    {
      name: 'Fresh Market Bistro',
      email: 'hello@freshmarketbistro.com',
      description: 'Farm-to-table restaurant focusing on seasonal dishes with ingredients from local farmers.',
      type: 'ORGANIZATION' as const,
      status: 'ACTIVE' as const,
      maxActiveChallenges: 25,
      maxUsersPerChallenge: 250,
      maxTags: 40
    }
  ]

  // Check for existing tenants
  const tenantNames = tenants.map(t => t.name)
  const existingTenants = await checkExistingTenants(tenantNames)
  const existingNames = new Set(existingTenants.map(t => t.name))
  
  console.log(`📋 Found ${existingTenants.length} existing tenants`)
  
  const createdTenants: any[] = [...existingTenants] // Include existing ones
  
  for (const tenantData of tenants) {
    if (existingNames.has(tenantData.name)) {
      console.log(`⏭️  Skipping existing tenant: ${tenantData.name}`)
      continue
    }
    
    const slug = generateSlug(tenantData.name)
    
    try {
      const tenant = await prisma.tenant.create({
        data: {
          ...tenantData,
          slug,
          totalChallenges: 0,
          totalUsers: 0,
          totalGifts: 0
        }
      })
      
      createdTenants.push(tenant)
      console.log(`✅ Created tenant: ${tenant.name} (${tenant.slug})`)
    } catch (error) {
      console.error(`❌ Error creating tenant ${tenantData.name}:`, error)
    }
  }
  
  console.log(`🎉 Successfully created ${createdTenants.length} tenants\n`)
  return createdTenants
}

// Task 2: Create venues for each tenant
async function seedVenues(tenants: any[]) {
  console.log('🏪 Seeding venues...')
  
  const venues = [
    {
      name: 'Caffè Centrale - Main Location',
      address: 'Via del Corso 123, 00187 Roma RM, Italy'
    },
    {
      name: 'The Burger Lab - Downtown',
      address: '42 Innovation Street, San Francisco, CA 94105, USA'
    },
    {
      name: 'Verde Pizza Napoletana - Centro Storico',
      address: 'Via dei Tribunali 32, 80138 Napoli NA, Italy'
    },
    {
      name: 'Urban Drinks - Rooftop Bar',
      address: '15th Floor, Sky Tower, New York, NY 10001, USA'
    },
    {
      name: 'Fresh Market Bistro - Garden Terrace',
      address: '789 Organic Avenue, Portland, OR 97201, USA'
    }
  ]

  // Check for existing venues
  const venueNames = venues.map(v => v.name)
  const existingVenues = await checkExistingVenues(venueNames)
  const existingVenueNames = new Set(existingVenues.map(v => v.name))
  
  console.log(`📋 Found ${existingVenues.length} existing venues`)

  const createdVenues: any[] = [...existingVenues] // Include existing ones
  
  for (let i = 0; i < tenants.length; i++) {
    const tenant = tenants[i]
    const venueData = venues[i]
    
    if (existingVenueNames.has(venueData.name)) {
      console.log(`⏭️  Skipping existing venue: ${venueData.name}`)
      continue
    }
    
    try {
      const venue = await prisma.venue.create({
        data: {
          ...venueData,
          tenantId: tenant.id
        }
      })
      
      createdVenues.push(venue)
      console.log(`✅ Created venue: ${venue.name} for tenant ${tenant.name}`)
    } catch (error) {
      console.error(`❌ Error creating venue for tenant ${tenant.name}:`, error)
    }
  }
  
  console.log(`🎉 Successfully created ${createdVenues.length} venues\n`)
  return createdVenues
}

// Task 3: Create challenges for each tenant
async function seedChallenges(tenants: any[], venues: any[]) {
  console.log('🏆 Seeding challenges...')
  
  const challengeData = [
    {
      name: 'Espresso Master Challenge',
      description: 'Test your knowledge about Italian coffee culture and win a free coffee tasting session!',
      type: 'GAME_BASED' as const,
      winnerCount: 3,
      giftType: 'COFFEE' as const
    },
    {
      name: 'Burger Creation Quiz',
      description: 'Show off your burger knowledge and win a custom burger creation experience!',
      type: 'INDIVIDUAL' as const,
      winnerCount: 2,
      giftType: 'DISH' as const
    },
    {
      name: 'Pizza Napoletana Trivia',
      description: 'Discover the secrets of authentic Neapolitan pizza and win a pizza making class!',
      type: 'GAME_BASED' as const,
      winnerCount: 1,
      giftType: 'PIZZA' as const
    },
    {
      name: 'Cocktail Mixology Challenge',
      description: 'Mix your way to victory and win a premium cocktail tasting for two!',
      type: 'INDIVIDUAL' as const,
      winnerCount: 2,
      giftType: 'DRINK' as const
    },
    {
      name: 'Farm-to-Table Knowledge Test',
      description: 'Learn about sustainable farming and win a seasonal tasting menu experience!',
      type: 'TEAM' as const,
      winnerCount: 1,
      giftType: 'DISCOUNT' as const
    }
  ]

  // Check for existing challenges
  const challengeNames = challengeData.map(c => c.name)
  const existingChallenges = await checkExistingChallenges(challengeNames)
  const existingChallengeNames = new Set(existingChallenges.map(c => c.name))
  
  console.log(`📋 Found ${existingChallenges.length} existing challenges`)

  const createdChallenges: any[] = [...existingChallenges] // Include existing ones
  
  for (let i = 0; i < tenants.length; i++) {
    const tenant = tenants[i]
    const venue = venues[i]
    const challenge = challengeData[i]
    
    if (existingChallengeNames.has(challenge.name)) {
      console.log(`⏭️  Skipping existing challenge: ${challenge.name}`)
      continue
    }
    
    // Create start and end dates
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + 1) // Tomorrow
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + 14) // 2 weeks duration
    
    try {
      // First create a game for the challenge
      const game = await prisma.game.create({
        data: {
          type: 'QUIZ',
          status: 'ACTIVE',
          timeLimit: 300, // 5 minutes
          name: `${challenge.name} Game`,
          description: `Game component for ${challenge.name}`,
          config: {
            questionCount: 10,
            timePerQuestion: 30,
            difficulty: 'medium',
            category: 'general'
          }
        }
      })
      
      // Create gift for the challenge
      const gift = await prisma.gift.create({
        data: {
          identity: `gift-${generateSlug(challenge.name)}-${Date.now()}`,
          name: getGiftNameForChallenge(challenge.name),
          description: getGiftDescriptionForChallenge(challenge.name),
          type: challenge.giftType,
          value: getGiftValueForChallenge(i),
          currency: 'EUR',
          totalQuantity: challenge.winnerCount,
          remainingQuantity: challenge.winnerCount,
          isActive: true,
          tenantId: tenant.id,
          venueId: venue.id,
          giftData: {
            validUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
            terms: 'Valid only at the issuing venue. Cannot be combined with other offers.'
          }
        }
      })
      
      // Create the challenge
      const createdChallenge = await prisma.challenge.create({
        data: {
          name: challenge.name,
          description: challenge.description,
          type: challenge.type,
          status: 'SCHEDULED',
          startDate,
          endDate,
          winnerCount: challenge.winnerCount,
          createdById: tenant.id, // Using tenant ID as creator for now
          gameConfig: {
            difficulty: 'medium',
            timeLimit: 300,
            passingScore: 70
          },
          totalParticipants: 0,
          tenantId: tenant.id,
          giftId: gift.id,
          gameId: game.id
        }
      })
      
      createdChallenges.push(createdChallenge)
      console.log(`✅ Created challenge: ${createdChallenge.name} for tenant ${tenant.name}`)
      console.log(`   📦 Associated gift: ${gift.name} (${gift.type})`)
    } catch (error) {
      console.error(`❌ Error creating challenge for tenant ${tenant.name}:`, error)
    }
  }
  
  console.log(`🎉 Successfully created ${createdChallenges.length} challenges\n`)
  return createdChallenges
}

// Helper functions for gift generation
function getGiftNameForChallenge(challengeName: string): string {
  const giftNames = [
    'Free Espresso Tasting Session',
    'Custom Burger Creation Experience',
    'Pizza Making Class Voucher',
    'Premium Cocktail Tasting for Two',
    'Seasonal Tasting Menu Experience'
  ]
  
  if (challengeName.includes('Espresso')) return giftNames[0]
  if (challengeName.includes('Burger')) return giftNames[1]
  if (challengeName.includes('Pizza')) return giftNames[2]
  if (challengeName.includes('Cocktail')) return giftNames[3]
  return giftNames[4]
}

function getGiftDescriptionForChallenge(challengeName: string): string {
  const descriptions = [
    'Experience a guided tasting of our finest espresso blends with our master barista',
    'Design and create your own custom burger with premium ingredients',
    'Learn the art of Neapolitan pizza making from our certified pizzaiolo',
    'Enjoy a selection of premium cocktails crafted by our expert mixologist',
    'Savor a multi-course tasting menu featuring seasonal, locally-sourced ingredients'
  ]
  
  if (challengeName.includes('Espresso')) return descriptions[0]
  if (challengeName.includes('Burger')) return descriptions[1]
  if (challengeName.includes('Pizza')) return descriptions[2]
  if (challengeName.includes('Cocktail')) return descriptions[3]
  return descriptions[4]
}

function getGiftValueForChallenge(index: number): number {
  const values = [15.00, 25.00, 35.00, 40.00, 50.00]
  return values[index % values.length]
}

// Task 4: Create tags for each venue
async function seedTags(venues: any[]) {
  console.log('🏷️  Seeding tags...')
  
  const tagTemplates = [
    // Coffee venue tags
    [
      { name: 'Espresso Station', type: 'QRCODE' as const, description: 'Main espresso machine area' },
      { name: 'Coffee Bean Display', type: 'NFC' as const, description: 'Premium coffee bean showcase' },
      { name: 'Pastry Counter', type: 'QRCODE' as const, description: 'Fresh pastries and desserts' }
    ],
    // Burger venue tags
    [
      { name: 'Grill Station', type: 'QRCODE' as const, description: 'Open kitchen burger grill' },
      { name: 'Ingredient Bar', type: 'NFC' as const, description: 'Premium burger toppings' },
      { name: 'Milkshake Corner', type: 'QRCODE' as const, description: 'Artisan milkshake station' }
    ],
    // Pizza venue tags
    [
      { name: 'Wood Oven', type: 'QRCODE' as const, description: 'Traditional Neapolitan wood-fired oven' },
      { name: 'Dough Station', type: 'NFC' as const, description: 'Fresh pizza dough preparation' },
      { name: 'Mozzarella Bar', type: 'QRCODE' as const, description: 'Fresh mozzarella di bufala' }
    ],
    // Cocktail venue tags
    [
      { name: 'Main Bar', type: 'QRCODE' as const, description: 'Premium cocktail mixing station' },
      { name: 'Spirit Wall', type: 'NFC' as const, description: 'Rare and premium spirits collection' },
      { name: 'Rooftop Terrace', type: 'QRCODE' as const, description: 'Outdoor cocktail experience' }
    ],
    // Bistro venue tags
    [
      { name: 'Farm Display', type: 'QRCODE' as const, description: 'Local farm produce showcase' },
      { name: 'Chef Table', type: 'NFC' as const, description: 'Interactive chef experience' },
      { name: 'Garden Herbs', type: 'QRCODE' as const, description: 'Fresh herb garden' }
    ]
  ]

  const createdTags: any[] = []
  
  for (let i = 0; i < venues.length; i++) {
    const venue = venues[i]
    const tags = tagTemplates[i]
    
    console.log(`🏷️  Processing tags for venue: ${venue.name}`)
    
    for (const tagData of tags) {
      // Check if tag already exists for this venue
      const existingTag = await prisma.tag.findFirst({
        where: {
          name: tagData.name,
          venueId: venue.id
        }
      })
      
      if (existingTag) {
        console.log(`⏭️  Skipping existing tag: ${tagData.name}`)
        createdTags.push(existingTag)
        continue
      }
      
      try {
        const tag = await prisma.tag.create({
          data: {
            name: tagData.name,
            identifier: `tag-${generateSlug(tagData.name)}-${venue.id.slice(-8)}`,
            type: tagData.type,
            latitude: 41.9028 + (Math.random() - 0.5) * 0.01, // Rome area with small variation
            longitude: 12.4964 + (Math.random() - 0.5) * 0.01,
            address: `${tagData.description} at ${venue.name}`,
            isActive: true,
            scanCount: 0,
            venueId: venue.id,
            tenantId: venue.tenantId
          }
        })
        
        createdTags.push(tag)
        console.log(`✅ Created tag: ${tag.name} (${tag.type}) for venue ${venue.name}`)
      } catch (error) {
        console.error(`❌ Error creating tag ${tagData.name}:`, error)
      }
    }
  }
  
  console.log(`🎉 Successfully processed ${createdTags.length} tags\n`)
  return createdTags
}

// Task 6: Create users
async function seedUsers() {
  console.log('👥 Seeding users...')
  
  const users = [
    {
      email: 'marco.rossi@example.com',
      firstName: 'Marco',
      lastName: 'Rossi',
      username: 'marco_rossi',
      dateOfBirth: new Date('1990-03-15')
    },
    {
      email: 'sarah.johnson@example.com',
      firstName: 'Sarah',
      lastName: 'Johnson',
      username: 'sarah_j',
      dateOfBirth: new Date('1988-07-22')
    },
    {
      email: 'luigi.ferrari@example.com',
      firstName: 'Luigi',
      lastName: 'Ferrari',
      username: 'luigi_ferrari',
      dateOfBirth: new Date('1992-11-08')
    },
    {
      email: 'emma.clark@example.com',
      firstName: 'Emma',
      lastName: 'Clark',
      username: 'emma_clark',
      dateOfBirth: new Date('1995-01-30')
    },
    {
      email: 'alessandro.bianchi@example.com',
      firstName: 'Alessandro',
      lastName: 'Bianchi',
      username: 'alex_bianchi',
      dateOfBirth: new Date('1987-09-12')
    }
  ]

  // Check for existing users
  const userEmails = users.map(u => u.email)
  const existingUsers = await checkExistingUsers(userEmails)
  const existingEmails = new Set(existingUsers.map(u => u.email))
  
  console.log(`📋 Found ${existingUsers.length} existing users`)

  const createdUsers: any[] = [...existingUsers] // Include existing ones
  
  for (const userData of users) {
    if (existingEmails.has(userData.email)) {
      console.log(`⏭️  Skipping existing user: ${userData.email}`)
      continue
    }
    
    try {
      const user = await prisma.user.create({
        data: {
          ...userData,
          auth0Id: `auth0|${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, // Fake Auth0 ID
          role: 'USER',
          status: 'ACTIVE',
          authProvider: 'LOCAL',
          language: 'en',
          timezone: 'Europe/Rome',
          password: 'hashed_password_here', // This would be properly hashed in real implementation
          totalPoints: 0,
          level: 1,
          lastLoginIp: '127.0.0.1'
        }
      })
      
      // Create coin balance for the user (start with 0 coins)
      await prisma.coinBalance.create({
        data: {
          userId: user.id,
          tagCoins: 0,
          shareCoins: 0,
          gameCoins: 0,
          totalCoins: 0
        }
      })
      
      createdUsers.push(user)
      console.log(`✅ Created user: ${user.firstName} ${user.lastName} (${user.email})`)
      console.log(`   💰 Initial coin balance: 0 (coins will be added through activities)`)
    } catch (error) {
      console.error(`❌ Error creating user ${userData.email}:`, error)
    }
  }
  
  console.log(`🎉 Successfully created ${createdUsers.length} users\n`)
  return createdUsers
}

// Task 7: Create shares (1 per user)
async function seedShares(users: any[], venues: any[]) {
  console.log('📱 Seeding shares...')
  
  const shareTemplates = [
    {
      type: 'VENUE' as const,
      platform: 'INSTAGRAM' as const,
      content: 'Just discovered this amazing coffee place! ☕ The espresso here is absolutely perfect - authentic Italian taste in the heart of Rome! #CoffeeLovers #Rome #Espresso #LocalGems'
    },
    {
      type: 'VENUE' as const, 
      platform: 'FACEBOOK' as const,
      content: 'Had the most incredible burger experience at this innovative lab! 🍔 They really know how to experiment with flavors while keeping it sustainable. Highly recommended! #BurgerLab #SustainableEating #Innovation'
    },
    {
      type: 'VENUE' as const,
      platform: 'INSTAGRAM' as const, 
      content: 'Authentic Neapolitan pizza made in a traditional wood-fired oven! 🍕 The taste is unbelievable - you can really feel the tradition and passion in every bite. #PizzaNapoletana #WoodFired #Authentic #Naples'
    },
    {
      type: 'VENUE' as const,
      platform: 'TIKTOK' as const,
      content: 'Cocktail masterclass vibes! 🍸 This rooftop bar serves the most creative drinks with premium spirits. The view and atmosphere are just perfect! #Cocktails #RooftopBar #Mixology #PremiumSpirits'
    },
    {
      type: 'VENUE' as const,
      platform: 'FACEBOOK' as const,
      content: 'Farm-to-table dining at its finest! 🌱 Every ingredient is fresh, local, and seasonal. You can really taste the difference when restaurants care about sustainability! #FarmToTable #LocalIngredients #Sustainable'
    }
  ]

  // Check for existing shares
  const userIds = users.map(u => u.id)
  const existingShares = await checkExistingShares(userIds)
  const existingUserShares = new Set(existingShares.map(s => s.userId))
  
  console.log(`📋 Found ${existingShares.length} existing shares`)

  const createdShares: any[] = [...existingShares] // Include existing ones
  
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    const venue = venues[i]
    const shareTemplate = shareTemplates[i]
    
    if (existingUserShares.has(user.id)) {
      console.log(`⏭️  Skipping existing share for user: ${user.firstName} ${user.lastName}`)
      continue
    }
    
    try {
      const share = await prisma.share.create({
        data: {
          userId: user.id,
          type: shareTemplate.type,
          platform: shareTemplate.platform,
          content: shareTemplate.content,
          status: 'PUBLISHED',
          views: Math.floor(Math.random() * 500) + 50, // 50-550 views
          likes: Math.floor(Math.random() * 100) + 10, // 10-110 likes  
          comments: Math.floor(Math.random() * 20) + 2, // 2-22 comments
          shares: Math.floor(Math.random() * 30) + 5 // 5-35 shares
        }
      })
      
      // Award coins for the share
      const shareCoins = 10 // Standard coins for sharing
      await createCoinTransaction(
        user.id,
        'SHARE',
        shareCoins,
        'SOCIAL_SHARE',
        share.id,
        `Earned ${shareCoins} coins for sharing about ${venue.name} on ${share.platform}`
      )
      
      createdShares.push(share)
      console.log(`✅ Created share: ${user.firstName} shared about ${venue.name} on ${share.platform}`)
      console.log(`   📊 Engagement - Views: ${share.views}, Likes: ${share.likes}, Comments: ${share.comments}, Shares: ${share.shares}`)
      console.log(`   💰 Awarded ${shareCoins} share coins`)
    } catch (error) {
      console.error(`❌ Error creating share for user ${user.firstName}:`, error)
    }
  }
  
  console.log(`🎉 Successfully created ${createdShares.length} shares\n`)
  return createdShares
}

// Task 8: Create tag scans (2-3 per user)
async function seedScans(users: any[], tags: any[]) {
  console.log('📱 Seeding tag scans...')
  
  // Check for existing scans
  const userIds = users.map(u => u.id)
  const existingScans = await checkExistingScans(userIds)
  const existingUserScans = new Set(existingScans.map(s => s.userId))
  
  console.log(`📋 Found ${existingScans.length} existing scans`)

  const createdScans: any[] = [...existingScans] // Include existing ones
  
  for (const user of users) {
    // Check if user already has scans
    const userExistingScans = existingScans.filter(s => s.userId === user.id)
    if (userExistingScans.length > 0) {
      console.log(`⏭️  Skipping existing scans for user: ${user.firstName} ${user.lastName} (${userExistingScans.length} scans)`)
      continue
    }
    
    // Create 2-3 random scans per user
    const numScans = Math.floor(Math.random() * 2) + 2 // 2-3 scans
    const userTags = getRandomElements(tags, numScans) // Get random tags
    
    for (let i = 0; i < numScans; i++) {
      const tag = userTags[i] || getRandomElement(tags) // Fallback to random tag
      
      try {
        const scanType = tag.type === 'NFC' ? 'NFC' : 'QR_CODE'
        
        const scan = await prisma.tagScan.create({
          data: {
            userId: user.id,
            tagId: tag.id,
            tenantId: tag.tenantId,
            scanType: scanType as any,
            metadata: {
              device: getRandomElement(['iPhone', 'Android', 'Samsung']),
              location: tag.address,
              sessionId: `scan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
              tagName: tag.name
            }
          }
        })
        
        // Award coins for the scan
        const tagCoins = 5 // Standard coins for scanning
        await createCoinTransaction(
          user.id,
          'TAG',
          tagCoins,
          'TAG_SCAN',
          scan.id,
          `Earned ${tagCoins} coins for scanning ${tag.name} at ${tag.address}`
        )
        
        createdScans.push(scan)
        console.log(`✅ Created scan: ${user.firstName} scanned "${tag.name}" (${scanType})`)
        console.log(`   💰 Awarded ${tagCoins} tag coins`)
      } catch (error) {
        console.error(`❌ Error creating scan for user ${user.firstName}:`, error)
      }
    }
  }
  
  console.log(`🎉 Successfully created ${createdScans.length} scans\n`)
  return createdScans
}

// Helper function to get multiple random elements
function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.min(count, array.length))
}

// Task 9: Create game sessions (2 per user)
async function seedGameSessions(users: any[], games: any[]) {
  console.log('🎮 Seeding game sessions...')
  
  // Check for existing game sessions
  const userIds = users.map(u => u.id)
  const existingGameSessions = await prisma.standaloneGameSession.findMany({
    where: {
      userId: {
        in: userIds
      }
    }
  })
  const existingUserSessions = new Set(existingGameSessions.map(gs => gs.userId))
  
  console.log(`📋 Found ${existingGameSessions.length} existing game sessions`)

  const createdGameSessions: any[] = [...existingGameSessions] // Include existing ones
  
  for (const user of users) {
    // Check if user already has game sessions
    const userExistingSessions = existingGameSessions.filter(gs => gs.userId === user.id)
    if (userExistingSessions.length > 0) {
      console.log(`⏭️  Skipping existing game sessions for user: ${user.firstName} ${user.lastName} (${userExistingSessions.length} sessions)`)
      continue
    }
    
    // Create 2 game sessions per user
    const numSessions = 2
    const gameTypes = ['QUIZ', 'REACTION', 'MUSIC', 'PUZZLE'] as const
    
    for (let i = 0; i < numSessions; i++) {
      try {
        // Generate realistic game results
        const isCompleted = Math.random() > 0.2 // 80% completion rate
        const score = isCompleted ? Math.floor(Math.random() * 100) + 1 : 0 // 1-100 if completed, 0 if not
        const duration = isCompleted ? Math.floor(Math.random() * 240) + 60 : Math.floor(Math.random() * 120) + 30 // 60-300s if completed, 30-150s if not
        const gameType = getRandomElement(gameTypes)
        const difficulty = getRandomElement(['EASY', 'MEDIUM', 'HARD'])
        const category = getRandomElement(['general', 'food', 'drinks', 'culture', 'trivia'])
        
        const gameSession = await prisma.standaloneGameSession.create({
          data: {
            userId: user.id,
            sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            gameType: gameType as any,
            difficulty: difficulty,
            category: category,
            score: score,
            timeSpent: duration,
            completedAt: isCompleted ? new Date() : null,
            answers: {
              questionsAnswered: isCompleted ? Math.floor(Math.random() * 10) + 5 : Math.floor(Math.random() * 5) + 1,
              correctAnswers: isCompleted ? Math.floor(score * 0.1) : Math.floor(score * 0.05),
              timePerQuestion: Math.floor(duration / (isCompleted ? 10 : 5)),
              device: getRandomElement(['mobile', 'web', 'tablet']),
              difficulty: difficulty
            }
          }
        })
        
        // Award coins based on session outcome
        let gameCoins = 0
        let coinDescription = ''
        
        if (isCompleted) {
          // Completion bonus + score bonus
          gameCoins = 15 + Math.floor(score / 10) // Base 15 coins + up to 10 bonus coins for score
          coinDescription = `Earned ${gameCoins} coins for completing ${gameType} game with score ${score}`
          
          await createCoinTransaction(
            user.id,
            'GAME',
            gameCoins,
            'GAME_COMPLETION',
            gameSession.id,
            coinDescription
          )
        } else {
          // Participation coins (smaller amount)
          gameCoins = 3
          coinDescription = `Earned ${gameCoins} coins for participating in ${gameType} game`
          
          await createCoinTransaction(
            user.id,
            'GAME',
            gameCoins,
            'GAME_PLAY',
            gameSession.id,
            coinDescription
          )
        }
        
        createdGameSessions.push(gameSession)
        console.log(`✅ Created game session: ${user.firstName} played "${gameType}" (${isCompleted ? 'COMPLETED' : 'ABANDONED'})`)
        console.log(`   🎯 Score: ${score}, Duration: ${duration}s, Coins: ${gameCoins}`)
      } catch (error) {
        console.error(`❌ Error creating game session for user ${user.firstName}:`, error)
      }
    }
  }
  
  console.log(`🎉 Successfully created ${createdGameSessions.length} game sessions\n`)
  return createdGameSessions
}

// Main seed function
async function main() {
  try {
    console.log('🌱 Starting comprehensive database seeding...\n')
    
    // Task 1: Seed tenants
    const tenants = await seedTenants()
    
    // Task 2: Seed venues
    const venues = await seedVenues(tenants)
    
    // Task 3: Seed challenges (also creates games and gifts)
    const challenges = await seedChallenges(tenants, venues)
    
    // Task 4: Seed tags
    const tags = await seedTags(venues)
    
    // Task 6: Seed users
    const users = await seedUsers()
    
    // Task 7: Seed shares
    const shares = await seedShares(users, venues)
    
    // Task 8: Seed scans
    const scans = await seedScans(users, tags)
    
    // Task 9: Seed game sessions (standalone games)
    const gameSessions = await seedGameSessions(users, [])
    
    console.log('✨ Database seeding completed successfully!')
    console.log(`📊 Final Summary:`)
    console.log(`   - Tenants: ${tenants.length}`)
    console.log(`   - Venues: ${venues.length}`)
    console.log(`   - Challenges: ${challenges.length}`)
    console.log(`   - Gifts: ${challenges.length} (1 per challenge)`)
    console.log(`   - Challenge Games: ${challenges.length} (1 per challenge)`)
    console.log(`   - Tags: ${tags.length} (3 per venue)`)
    console.log(`   - Users: ${users.length}`)
    console.log(`   - Shares: ${shares.length} (1 per user)`)
    console.log(`   - Scans: ${scans.length} (2-3 per user)`)
    console.log(`   - Game Sessions: ${gameSessions.length} (2 per user)`)
    
    
  } catch (error) {
    console.error('💥 Error during seeding:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seeder
if (require.main === module) {
  main()
}

export { main as seedComprehensiveData }
