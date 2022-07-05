import { ContextDataCartProvider } from 'context/ContextDataCart';
import { ContextDataProductProvider } from 'context/ContextDataProduct';
import { RoutesApp } from 'routes/index.routes';

export const App = () => {
  return (
    <>
      <ContextDataProductProvider>
        <ContextDataCartProvider>
          <RoutesApp />
        </ContextDataCartProvider>
      </ContextDataProductProvider>
    </>
  );
};
