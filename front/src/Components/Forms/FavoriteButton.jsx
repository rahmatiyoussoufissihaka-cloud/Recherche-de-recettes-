export default function FavoriteButton({ isFavorite, onToggle, styleCustom = {} }) {
  // Styles de base du bouton
  const baseStyle = {
  backgroundColor: isFavorite ? '#fff0f3' : 'rgba(255,255,255,0.9)',
  border: '1px solid #ffccd5',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  display: 'inline-flex',
  alignItems: 'center',    
  justifyContent: 'center',  
  ...styleCustom
};
  return (
    <button 
      onClick={onToggle}
      className="btn shadow-sm"
      style={baseStyle}
      aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      {isFavorite ? (
        
        <svg 
          xmlns="http://w3.org" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="#ff4d6d" 
          stroke="#ff4d6d" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      ) : (
       
        <svg 
          xmlns="http://w3.org" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#ff4d6d" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )}
    </button>
  );
}