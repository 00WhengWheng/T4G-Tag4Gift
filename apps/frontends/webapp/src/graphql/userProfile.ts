import { gql } from 'urql';

export const USER_PROFILE_QUERY = gql`
  query UserProfile($id: String!) {
    user(id: $id) {
      id
      email
      username
      firstName
      lastName
      avatar
      role
      status
      totalPoints
      level
      awardedGifts {
        gift { id name type value }
      }
      challengeParticipants {
        challenge { id name }
        status
        score
      }
    }
  }
`;
