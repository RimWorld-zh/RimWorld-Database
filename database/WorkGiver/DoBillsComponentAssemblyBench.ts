const DoBillsComponentAssemblyBench: DataWorkGiver = {
  workType: 'Smithing',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 50,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'ComponentAssemblyBench'
  ],
  defName: 'DoBillsComponentAssemblyBench'
}

export default DoBillsComponentAssemblyBench;
