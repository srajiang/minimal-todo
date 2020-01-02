
class User < ApplicationRecord

    validates :username, :password_digest, :session_token, presence:true
    validates :password, length: { minimum: 6, allow_nil:true}
    validates :username, uniqueness: true
    validates :session_token, uniqueness: true

    attr_reader :password

    before_validation :ensure_token
    
    def self.find_by_credentials(user, password)
        user = User.find_by(username: user)
        return nil unless user
        return user if user.is_password?(password)
    end

    def password=(password)
        @password=password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save
        self.session_token
    end

    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
