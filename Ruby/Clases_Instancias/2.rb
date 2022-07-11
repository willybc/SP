module Juliana
    @energia = 1000
    
    def self.energia
      @energia
    end
    
    def self.atacar! (zombi, cant_puntos)
      zombi.recibir_danio! (cant_puntos)
      
    end
  end