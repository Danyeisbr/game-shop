export interface Game {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  genre: string;
  isNew: boolean;
}

export interface GamesResponse {
  games: Game[];
  hasMore: boolean;
  total: number;
  totalPages?: number;
  currentPage?: number;
}

export interface WithChildren {
  children: React.ReactNode;
}

export interface CatalogHeaderProps {
  title?: string;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export interface CartActionButtonProps {
  isInCart: boolean;
  onClick: () => void;
}

export interface GameInfoProps {
  game: Game;
}

export interface GameImageProps {
  src?: string;
  alt: string;
}

export interface GenreSelectProps {
  genres: string[];
  selectedGenre: string;
  onChange: (genre: string) => void;
  id?: string;
  className?: string;
}

export interface EmptyCatalogProps {
  message: string;
}

export interface CatalogErrorProps {
  message: string;
  onRetry: () => void;
}

export interface PaginationButtonProps {
  loading: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export interface GameGridProps {
  games: Game[];
}

export interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export interface CatalogPaginationProps {
  loading: boolean;
  hasMore: boolean;
  onSeeMore: () => void;
}

export interface NavLinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ApplyDigitalLogoProps {
  className?: string;
}

export interface UseGameCatalogResult {
  games: Game[];
  loading: boolean;
  error: string | null;
  selectedGenre: string;
  hasMore: boolean;
  handleGenreChange: (genre: string) => void;
  handleSeeMore: () => void;
  handleRetry: () => void;
}

export interface OrderSummaryProps {
  items: Game[];
  total: number;
}