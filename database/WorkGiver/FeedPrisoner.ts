const FeedPrisoner: DataWorkGiver = {
  workType: 'Warden',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 80,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'FeedPrisoner'
}

export default FeedPrisoner;
