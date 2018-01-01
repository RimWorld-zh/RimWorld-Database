const BuryCorpses: DataWorkGiver = {
  workType: 'Hauling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 90,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'BuryCorpses'
}

export default BuryCorpses;
