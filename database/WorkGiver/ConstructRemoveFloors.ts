const ConstructRemoveFloors: DataWorkGiver = {
  workType: 'Construction',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 10,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'ConstructRemoveFloors'
}

export default ConstructRemoveFloors;
