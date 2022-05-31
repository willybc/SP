module Inodoro
    @cafeina_en_sangre = 90
    
    def self.cafeina_en_sangre
      @cafeina_en_sangre
    end
    
    def self.compinche
      @compinche
    end
    
    def self.compinche=(compinche)
      @compinche = compinche
    end
    
    def self.tomar_mate!
      @cafeina_en_sangre += 10
      self.compinche.recibir_mate!
    end
    
  end
  
  module Eulogia
    @enojada = false
    
    #getter
    def self.enojada?
      @enojada
    end
    
    #setter
    def self.enojada=(bool)
      @enojada = bool
    end
    
    def self.recibir_mate!
      self.enojada = true
    end
      
  end
  
  module Mendieta
    @ganas_de_hablar = 5
    
    def self.ganas_de_hablar
      @ganas_de_hablar
    end
    
    def self.ganas_de_hablar=(valor)
      @ganas_de_hablar = valor
    end
    
    def self.recibir_mate!
      self.ganas_de_hablar = 0
    end
  end
  
  