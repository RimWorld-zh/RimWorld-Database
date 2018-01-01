const DoBillsMakeApparel: DataWorkGiver = {
  workType: 'Tailoring',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 110,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'ElectricTailoringBench',
    'HandTailoringBench'
  ],
  defName: 'DoBillsMakeApparel'
}

export default DoBillsMakeApparel;
