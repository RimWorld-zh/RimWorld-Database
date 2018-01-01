const ConstructSmoothFloors: DataWorkGiver = {
  workType: 'Construction',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 5,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'ConstructSmoothFloors'
}

export default ConstructSmoothFloors;
