/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatieintId = /* GraphQL */ `
  mutation CreatePatieintId($patientId: String) {
    createPatieintId(patientId: $patientId) {
      patientId
    }
  }
`;
export const createPatientBucket = /* GraphQL */ `
  mutation CreatePatientBucket($input: CreatePatientBucketInput!) {
    createPatientBucket(input: $input) {
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
export const updatePatientBucket = /* GraphQL */ `
  mutation UpdatePatientBucket($input: UpdatePatientBucketInput!) {
    updatePatientBucket(input: $input) {
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
export const deletePatientBucket = /* GraphQL */ `
  mutation DeletePatientBucket($input: DeletePatientBucketInput!) {
    deletePatientBucket(input: $input) {
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
export const addUpdatePatientProfileInfo = /* GraphQL */ `
  mutation AddUpdatePatientProfileInfo(
    $input: AddUpdatePatientProfileInfoInput!
  ) {
    addUpdatePatientProfileInfo(input: $input) {
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
export const addUpdatePatinetProfileInsurance = /* GraphQL */ `
  mutation AddUpdatePatinetProfileInsurance(
    $input: AddUpdatePatientProfileInsuranceInput!
  ) {
    addUpdatePatinetProfileInsurance(input: $input) {
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
export const addUpdatePatinetProfileClinic = /* GraphQL */ `
  mutation AddUpdatePatinetProfileClinic(
    $input: AddUpdatePatientProfileClinicInput!
  ) {
    addUpdatePatinetProfileClinic(input: $input) {
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
