module Juegoteca
  
    @juegos = [CarlosDuty, TimbaElLeon , Metroide]
    
    def self.juegos
      @juegos
    end
    
    def self.juego_mas_dificil_que (una_dificultad)
      @juegos.find { |unJuego| unJuego.dificultad > una_dificultad }
    end
  end