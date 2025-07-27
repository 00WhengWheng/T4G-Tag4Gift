import { gql } from 'urql';

export const TENANT_STATS_QUERY = gql`
  query TenantStats($tenantId: String!) {
    tenant(id: $tenantId) {
      id
      name
      totalUsers
      totalGifts
      totalChallenges
      maxActiveChallenges
      maxUsersPerChallenge
      maxTags
      users {
        id
        email
        username
        firstName
        lastName
        totalPoints
        level
        awardedGifts { gift { id name type value } }
        challengeParticipants { challenge { id name } status score }
      }
    }
  }
`;
