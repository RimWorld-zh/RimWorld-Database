const DoBillsProduceDrugs: DataWorkGiver = {
  workType: 'Crafting',
  workTags: [
    WorkTags.Intellectual
  ],
  priorityInType: 95,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'DrugLab'
  ],
  defName: 'DoBillsProduceDrugs'
}

export default DoBillsProduceDrugs;
