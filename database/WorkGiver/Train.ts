const Train: DataWorkGiver = {
  workType: 'Handling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 70,
  requiredCapacities: [
    'Talking',
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'Train'
}

export default Train;
