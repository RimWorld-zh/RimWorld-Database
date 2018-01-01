const Shear: DataWorkGiver = {
  workType: 'Handling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 85,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'Shear'
}

export default Shear;
