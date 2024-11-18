import { useSearchParams } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function Onboarding() {
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step') || '1';

  return (
    <>
      {step === '1' && <Step1 />}
      {step === '2' && <Step2 />}
      {step === '3' && <Step3 />}
    </>
  );
}
export default Onboarding;
