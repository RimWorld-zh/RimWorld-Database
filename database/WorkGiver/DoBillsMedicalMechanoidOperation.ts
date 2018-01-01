const DoBillsMedicalMechanoidOperation: DataWorkGiver = {
  workType: 'Crafting',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 110,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'DoBillsMedicalMechanoidOperation'
}

export default DoBillsMedicalMechanoidOperation;
