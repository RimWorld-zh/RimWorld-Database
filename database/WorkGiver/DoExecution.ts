const DoExecution: DataWorkGiver = {
  workType: 'Warden',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 110,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'DoExecution'
}

export default DoExecution;
