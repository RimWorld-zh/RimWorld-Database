const Drill: DataWorkGiver = {
  workType: 'Mining',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 50,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'Drill'
}

export default Drill;
