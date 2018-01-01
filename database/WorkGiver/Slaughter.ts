const Slaughter: DataWorkGiver = {
  workType: 'Handling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 100,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'Slaughter'
}

export default Slaughter;
