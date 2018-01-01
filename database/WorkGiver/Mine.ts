const Mine: DataWorkGiver = {
  workType: 'Mining',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 100,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.Fieldwork,
  fixedBillGiverDefs: null,
  defName: 'Mine'
}

export default Mine;
