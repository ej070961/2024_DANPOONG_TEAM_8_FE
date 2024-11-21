import { useLocation, useSearchParams } from 'react-router-dom';
import Step0 from './step0';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import { useAuthStore } from '../../store/useAuthStore';

function InitialSetup() {
  const { nickname } = useAuthStore();
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step') || '0';

  return (
    <>
      {step === '0' && <Step0 nickname={nickname!} />}
      {step === '1' && <Step1 />}
      {step === '2' && <Step2 />}
      {step === '3' && <Step3 />}
    </>
  );
}

export default InitialSetup;
