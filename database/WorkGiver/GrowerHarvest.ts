const GrowerHarvest: DataWorkGiver = {
  workType: 'Growing',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 100,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'GrowerHarvest'
}

export default GrowerHarvest;
