const Hauling: DataWorkType = {
  naturalPriority: 300,
  relevantSkills: [],
  workGiversByPriority: [
    'UnloadCarriers',
    'LoadTransporters',
    'HelpGatheringItemsForCaravan',
    'Strip',
    'BuryCorpses',
    'HaulCorpses',
    'Open',
    'Refuel',
    'RearmTraps',
    'DoBillsCremate',
    'DoBillsHaulCampfire',
    'TakeBeerOutOfFermentingBarrel',
    'FillFermentingBarrel',
    'HaulGeneral'
  ],
  workTags: [
    WorkTags.ManualDumb,
    WorkTags.Hauling
  ],
  defName: 'Hauling'
}

export default Hauling;
