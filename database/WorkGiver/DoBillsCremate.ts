const DoBillsCremate: DataWorkGiver = {
  workType: 'Hauling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 40,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'ElectricCrematorium'
  ],
  defName: 'DoBillsCremate'
}

export default DoBillsCremate;
