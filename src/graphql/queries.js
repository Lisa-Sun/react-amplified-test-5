/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      author
      title
      content
      url
      ups
      downs
      relatedPosts {
        id
        author
        title
        content
        url
        ups
        downs
      }
    }
  }
`;
export const createPatientIdMutation = /* GraphQL */ `
  query CreatePatientIdMutation($patientId: String!) {
    createPatientIDMutation(patientId: $patientId) {
      patientId
    }
  }
`;
export const getPatientBucket = /* GraphQL */ `
  query GetPatientBucket($patientId: ID!) {
    getPatientBucket(patientId: $patientId) {
      patientId
      lastName
      firstName
      dob
      homePhoneNumber
      hcpProfile {
        NPINumber
      }
      referral {
        typeOfReferral
        expirationDate
        primaryDiagnosis
        administration
        patientHeight
        patientWeight
      }
      priorAuthorization {
        submitTime
      }
      patientAssistantProgram {
        householdSize
        annualIncome
        incomeDoc
        eligibleForCoPay
      }
    }
  }
`;
export const listPatientBuckets = /* GraphQL */ `
  query ListPatientBuckets(
    $filter: TablePatientBucketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientBuckets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        patientId
        lastName
        firstName
        dob
        homePhoneNumber
      }
      nextToken
    }
  }
`;
export const queryPatientBucketsByLastNameDobIndex = /* GraphQL */ `
  query QueryPatientBucketsByLastNameDobIndex(
    $lastName: String!
    $first: Int
    $after: String
  ) {
    queryPatientBucketsByLastNameDobIndex(
      lastName: $lastName
      first: $first
      after: $after
    ) {
      items {
        patientId
        lastName
        firstName
        dob
        homePhoneNumber
      }
      nextToken
    }
  }
`;
export const queryPatientBucketsByLastNamePhoneIndex = /* GraphQL */ `
  query QueryPatientBucketsByLastNamePhoneIndex(
    $lastName: String!
    $first: Int
    $after: String
  ) {
    queryPatientBucketsByLastNamePhoneIndex(
      lastName: $lastName
      first: $first
      after: $after
    ) {
      items {
        patientId
        lastName
        firstName
        dob
        homePhoneNumber
      }
      nextToken
    }
  }
`;
