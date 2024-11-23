import { useSearchParams } from 'react-router-dom';
import OnboardingLayout from '../../layouts/OnboardingLayout';
import ObFirstPng from '../../assets/images/ob-first.png';
import ObSecondPng from '../../assets/images/ob-second.png';
import ObThirdPng from '../../assets/images/ob-third.png';
import ObFourthPng from '../../assets/images/ob-fourth.png';
import { useEffect } from 'react';
function Onboarding() {
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step') || '1';

  useEffect(() => {
    if (localStorage.getItem('init')) {
      localStorage.removeItem('init');
    }
  }, []);

  return (
    <>
      {step === '1' && (
        <OnboardingLayout
          title={`혼자가 아닌 함께!\n 자립의 첫걸음`}
          description={` 나만의 든든한 자립친구, 버디와 함께\n자립을 향해 한 걸음씩 나아가요`}
          stepIndex={1}
          navigatePath='/onboarding?step=2'
          imagePath={ObFirstPng}
        />
      )}
      {step === '2' && (
        <OnboardingLayout
          title={`자립목표를 설정하여\n미션을 수행해요`}
          description={`목표에 맞는 맞춤형 미션을 수행하며\n자립 역량을 차근차근 쌓을 수 있어요`}
          stepIndex={2}
          navigatePath='/onboarding?step=3'
          imagePath={ObSecondPng}
        />
      )}
      {step === '3' && (
        <OnboardingLayout
          title={`미션을 완료하면 \n 버디가 성장해요`}
          description={`맞춤형 미션을 완료할때마다 \n버디가 한 단계씩 점점 성장해나가요`}
          stepIndex={3}
          navigatePath='/onboarding?step=4'
          imagePath={ObThirdPng}
        />
      )}
      {step === '4' && (
        <OnboardingLayout
          title={`자립 지원정보를 \n한눈에 확인해보세요`}
          description={`청년들의 주거, 교육, 생활비 등 \n다양한 지원정보를 한눈에 쉽게 확인 가능해요`}
          stepIndex={4}
          navigatePath='/home'
          imagePath={ObFourthPng}
        />
      )}
    </>
  );
}
export default Onboarding;
