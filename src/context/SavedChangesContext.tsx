import { createContext, useContext, useState, ReactNode } from 'react';

type SavedChangesContextType = {
  showSaved: boolean;
  triggerSavedChanges: () => void;
};


const SavedChangesContext = createContext<SavedChangesContextType>({
  showSaved: false,
  triggerSavedChanges: () => {},
});


export const SavedChangesProvider = ({ children }: { children: ReactNode }) => {
  const [showSaved, setShowSaved] = useState(false);

  const triggerSavedChanges = () => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000); 
  };

  return (
    <SavedChangesContext.Provider value={{ showSaved, triggerSavedChanges }}>
      {children}
    </SavedChangesContext.Provider>
  );
};

export const useSavedChanges = () => useContext(SavedChangesContext);
