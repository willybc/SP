class SuperZombi
    def initialize(salud_inicial)
      @salud = salud_inicial
    end
    
    def sabe_correr?
      true
    end
    
    def gritar
      "¡agrrrg!"
    end
    
    def salud
      @salud
    end
    
    def recibir_danio!(valor_danio)
      if salud > valor_danio*3
        @salud -= valor_danio*3
      else
        @salud = 0
      end
    end
    
    def sin_vida?
      self.salud == 0
    end
    
    def regenerarse!
      @salud = 100
    end
  end