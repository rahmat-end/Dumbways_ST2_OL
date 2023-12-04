package usersdto

type CreateUserRequest struct {
	FullName     string `json:"fullName" form:"fullName" validate:"required"`
	Alamat       string `json:"alamat" form:"alamat" validate:"required"`
	JenisKelamin string `json:"jenisKelamin" form:"jenisKelamin" validate:"required"`
	Username     string `json:"username" form:"username" validate:"required"`
	Password     string `json:"password" form:"password" validate:"required"`
	Role         string `json:"role" form:"role" validate:"required"`
}

type UpdateUserRequest struct {
	FullName     string `json:"fullName" form:"fullName"`
	Alamat       string `json:"alamat" form:"alamat"`
	JenisKelamin string `json:"jenisKelamin" form:"jenisKelamin"`
	Username     string `json:"username" form:"username"`
	Password     string `json:"password" form:"password"`
	Role         string `json:"role" form:"role"`
}

type UserResponse struct {
	Id       int    `json:"id"`
	FullName string `json:"fullName"`
	// Email     string    `json:"email"`
	// Password  string    `json:"passwordxxxxxxx"`
	// CreatedAt time.Time `json:"created_at"`
	// UpdatedAt time.Time `json:"updated_at"`
}
