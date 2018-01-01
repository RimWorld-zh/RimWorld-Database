const LoadTransporters: DataWorkGiver = {
  workType: 'Hauling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 110,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'LoadTransporters'
}

export default LoadTransporters;
