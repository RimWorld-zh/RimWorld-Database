const DoBillsMakeWeapons: DataWorkGiver = {
  workType: 'Smithing',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 115,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'ElectricSmithy',
    'FueledSmithy'
  ],
  defName: 'DoBillsMakeWeapons'
}

export default DoBillsMakeWeapons;
