const DoBillsMachiningTable: DataWorkGiver = {
  workType: 'Smithing',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 75,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'TableMachining'
  ],
  defName: 'DoBillsMachiningTable'
}

export default DoBillsMachiningTable;
