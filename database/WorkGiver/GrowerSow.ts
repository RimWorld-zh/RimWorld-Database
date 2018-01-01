const GrowerSow: DataWorkGiver = {
  workType: 'Growing',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 50,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'GrowerSow'
}

export default GrowerSow;
