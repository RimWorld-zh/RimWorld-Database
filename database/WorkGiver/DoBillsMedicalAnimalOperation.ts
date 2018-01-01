const DoBillsMedicalAnimalOperation: DataWorkGiver = {
  workType: 'Doctor',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 50,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'DoBillsMedicalAnimalOperation'
}

export default DoBillsMedicalAnimalOperation;
