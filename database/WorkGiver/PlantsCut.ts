const PlantsCut: DataWorkGiver = {
  workType: 'PlantCutting',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 0,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'PlantsCut'
}

export default PlantsCut;
