const DoBillsMedicalHumanOperation: DataWorkGiver = {
  workType: 'Doctor',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 80,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'DoBillsMedicalHumanOperation'
}

export default DoBillsMedicalHumanOperation;
