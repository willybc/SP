module Juegoteca
  
    @juegos = [CarlosDuty, TimbaElLeon , Metroide]
    
    def self.juegos
      @juegos
    end
    
    def self.juegos_violentos
      @juegos.select { |un_juego| un_juego.violento? }
    end
    
  end