import { Card } from "./ui/card";
import { Heart } from "lucide-react";
import { Listing } from "@/types/listings";

interface ProductCardProps {
  listing: Listing;
}

const ProductCard = ({ listing }: ProductCardProps) => {
  const renderDetails = () => {
    if (listing.category === "imovel") {
      return (
        <div className="text-sm text-gray-500">
          <p>{listing.area}m² • {listing.type}</p>
          {listing.bedrooms && <p>{listing.bedrooms} quartos</p>}
        </div>
      );
    }
    
    if (listing.category === "veiculo") {
      return (
        <div className="text-sm text-gray-500">
          <p>{listing.brand} • {listing.model}</p>
          <p>{listing.year} • {listing.mileage}km</p>
        </div>
      );
    }

    return null;
  };

  return (
    <Card className="group cursor-pointer overflow-hidden">
      <div className="relative aspect-square">
        <img
          src={listing.images?.[0]}
          alt={listing.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:text-primary transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{listing.title}</h3>
        <p className="text-2xl font-bold text-primary">
          R$ {listing.price.toLocaleString('pt-BR')}
        </p>
        {renderDetails()}
        <div className="mt-2 text-sm text-gray-500">
          <p>{listing.location}</p>
          <p>{new Date(listing.createdAt).toLocaleDateString('pt-BR')}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;