module Bouba
    @salud = 100
    
    def self.sabe_correr?
      false
    end
    
    def self.gritar
      "¡agrrrg!"
    end
    
    def self.salud
      @salud
    end
    
    def self.recibir_danio! (valor_danio)
      if salud > valor_danio*2
        @salud -= valor_danio*2
      else
        @salud = 0
      end
    end
    
    def self.sin_vida?
      self.salud == 0
    end
    
  end
  
  module Kiki
    @salud = 100
    
    def self.sabe_correr?
      false
    end
    
    def self.gritar
      "¡agrrrg!"
    end
    
    def self.salud
      @salud
    end
    
    def self.sin_vida?
      self.salud == 0
    end
    
    def self.recibir_danio! (valor_danio)
      if salud > valor_danio*2
        @salud -= valor_danio*2
      else
        @salud = 0
      end
    end
  end
    