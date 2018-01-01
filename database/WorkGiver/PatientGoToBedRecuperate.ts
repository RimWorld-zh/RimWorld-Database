const PatientGoToBedRecuperate: DataWorkGiver = {
  workType: 'PatientBedRest',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 0,
  requiredCapacities: [],
  tagToGive: JobTag.RestingForMedicalReasons,
  fixedBillGiverDefs: null,
  defName: 'PatientGoToBedRecuperate'
}

export default PatientGoToBedRecuperate;
