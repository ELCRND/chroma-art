type Props = {
  handleClick: VoidFunction;
  isFavorite: boolean | undefined;
  isLoading: boolean;
};
const CardActions = ({ handleClick, isFavorite, isLoading }: Props) => {
  return (
    <div className="p-2 flex flex-col justify-center items-center absolute top-4 right-4 bg-black bg-opacity-50 rounded-lg">
      <button
        type="button"
        disabled={true && isLoading}
        onClick={handleClick}
        title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      >
        {isFavorite ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default CardActions;
