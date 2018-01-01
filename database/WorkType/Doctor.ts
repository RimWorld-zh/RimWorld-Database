const Doctor: DataWorkType = {
  naturalPriority: 1300,
  relevantSkills: [
    'Medicine'
  ],
  workGiversByPriority: [
    'DoctorTendEmergency',
    'DoctorRescue',
    'DoBillsMedicalHumanOperation',
    'DoctorTendToHumanlikes',
    'DoctorTendToSelf',
    'DoctorFeedHumanlikes',
    'DoBillsMedicalAnimalOperation',
    'DoctorTendToAnimals',
    'DoctorFeedAnimals',
    'TakeToBedToOperate',
    'VisitSickPawn'
  ],
  workTags: [
    WorkTags.Caring
  ],
  defName: 'Doctor'
}

export default Doctor;
