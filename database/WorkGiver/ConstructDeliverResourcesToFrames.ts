const ConstructDeliverResourcesToFrames: DataWorkGiver = {
  workType: 'Construction',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 40,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'ConstructDeliverResourcesToFrames'
}

export default ConstructDeliverResourcesToFrames;
