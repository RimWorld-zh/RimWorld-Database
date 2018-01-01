const ReleasePrisoner: DataWorkGiver = {
  workType: 'Warden',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 100,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'ReleasePrisoner'
}

export default ReleasePrisoner;
