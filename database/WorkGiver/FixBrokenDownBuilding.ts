const FixBrokenDownBuilding: DataWorkGiver = {
  workType: 'Construction',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 90,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'FixBrokenDownBuilding'
}

export default FixBrokenDownBuilding;
