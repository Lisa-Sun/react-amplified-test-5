/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatientBucket = /* GraphQL */ `
  subscription OnCreatePatientBucket(
    $patientId: ID
    $lastName: String
    $firstName: String
    $dob: String
    $homePhoneNumber: String
  ) {
    onCreatePatientBucket(
      patientId: $patientId
      lastName: $lastName
      firstName: $firstName
      dob: $dob
      homePhoneNumber: $homePhoneNumber
    ) {
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
export const onUpdatePatientBucket = /* GraphQL */ `
  subscription OnUpdatePatientBucket(
    $patientId: ID
    $lastName: String
    $firstName: String
    $dob: String
    $homePhoneNumber: String
  ) {
    onUpdatePatientBucket(
      patientId: $patientId
      lastName: $lastName
      firstName: $firstName
      dob: $dob
      homePhoneNumber: $homePhoneNumber
    ) {
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
export const onDeletePatientBucket = /* GraphQL */ `
  subscription OnDeletePatientBucket(
    $patientId: ID
    $lastName: String
    $firstName: String
    $dob: String
    $homePhoneNumber: String
  ) {
    onDeletePatientBucket(
      patientId: $patientId
      lastName: $lastName
      firstName: $firstName
      dob: $dob
      homePhoneNumber: $homePhoneNumber
    ) {
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
