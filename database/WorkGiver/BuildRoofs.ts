const BuildRoofs: DataWorkGiver = {
  workType: 'Construction',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 70,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'BuildRoofs'
}

export default BuildRoofs;
