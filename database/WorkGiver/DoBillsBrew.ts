const DoBillsBrew: DataWorkGiver = {
  workType: 'Cooking',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 30,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'Brewery'
  ],
  defName: 'DoBillsBrew'
}

export default DoBillsBrew;
